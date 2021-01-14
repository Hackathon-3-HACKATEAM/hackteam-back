SET sql_mode = '';
SET GLOBAL time_zone = '+1:00';

SET FOREIGN_KEY_CHECKS = 0;
SET GROUP_CONCAT_MAX_LEN=32768;
SET @tables = NULL;
SELECT GROUP_CONCAT('`', table_name, '`') INTO @tables
  FROM information_schema.tables
  WHERE table_schema = (SELECT DATABASE());
SELECT IFNULL(@tables,'dummy') INTO @tables;
SET @tables = CONCAT('DROP TABLE IF EXISTS ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `buyers` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cities_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
);
CREATE TABLE `farmers` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cities_id` int NOT NULL,
  `registered_at` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `farm_size` int NOT NULL
);
CREATE TABLE `cities` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `zipcode` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `lat` float NOT NULL,
  `long` float NOT NULL,
  `insee_code` int NOT NULL
);
CREATE TABLE `transactions` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `products_id` int NOT NULL,
  `farmers_id` int NOT NULL,
  `buyers_id` int NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL
);
CREATE TABLE `products` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
);
ALTER TABLE `buyers` ADD FOREIGN KEY (`cities_id`) REFERENCES `cities` (`id`);
ALTER TABLE `farmers` ADD FOREIGN KEY (`cities_id`) REFERENCES `cities` (`id`);
ALTER TABLE `transactions` ADD FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);
ALTER TABLE `transactions` ADD FOREIGN KEY (`farmers_id`) REFERENCES `farmers` (`id`);
ALTER TABLE `transactions` ADD FOREIGN KEY (`buyers_id`) REFERENCES `buyers` (`id`);