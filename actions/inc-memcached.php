<?php

namespace App\Memcached;

class MemCached
{
	private $memcached;
	private $cache_prefix;
	private $is_connected = false;

	public function __construct()
	{
		$host = MEMCACHED_HOST;
		$this->cache_prefix = str_replace(['https://', 'http://', '/'], '', site_url());
		$this->memcached = new \Memcached(); // Use fully qualified class name
		$this->memcached->addServer($host, 11211);

		// Check connection
		if ($this->memcached->getStats() !== false) {
			$this->is_connected = true;
		}
	}

	/**
	 * Get a value from the cache.
	 *
	 * @param string $key The key of the item to retrieve.
	 * @return mixed The cached data or false if the key does not exist or if not connected.
	 */
	public function get($key)
	{
		if (!$this->is_connected) {
			return false;
		}

		$result = $this->memcached->get($this->cache_prefix . '_' . $key);

		// Check if there was an error retrieving the data
		if ($this->memcached->getResultCode() != \Memcached::RES_SUCCESS) {
			return false;
		}

		return $result;
	}

	/**
	 * Store a value in the cache.
	 *
	 * @param string $key The key under which to store the value.
	 * @param mixed $value The value to store.
	 * @param int $expiration The expiration time, defaults to 0 (no expiration).
	 * @return bool True on success, false on failure.
	 */
	public function set($key, $value, $expiration = 0)
	{
		if (!$this->is_connected) {
			return false;
		}

		return $this->memcached->set($this->cache_prefix . '_' . $key, $value, $expiration);
	}

	/**
	 * Delete a value from the cache.
	 *
	 * @param string $key The key of the item to delete.
	 * @return bool True on success, false on failure.
	 */
	public function delete($key)
	{
		if (!$this->is_connected) {
			return false;
		}

		return $this->memcached->delete($this->cache_prefix . '_' . $key);
	}

	/**
	 * Clear all items from the cache.
	 *
	 * @return bool True on success, false on failure.
	 */
	public function flush()
	{
		if (!$this->is_connected) {
			return false;
		}

		return $this->memcached->flush();
	}
}