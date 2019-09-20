CREATE TABLE `url_shorten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `original_url` varchar(255) NOT NULL,
  `url_code` varchar(255) DEFAULT NULL,
  `short_url` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
