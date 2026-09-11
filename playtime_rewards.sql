CREATE TABLE IF NOT EXISTS `playtime_rewards` (
    `citizenid` varchar(50) NOT NULL,
    `day_key` varchar(10) NOT NULL,
    `play_seconds` int unsigned NOT NULL DEFAULT 0,
    `rewards_claimed` int unsigned NOT NULL DEFAULT 0,
    `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    PRIMARY KEY (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
