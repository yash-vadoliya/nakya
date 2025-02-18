-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 19, 2024 at 07:35 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nakya`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cell_line_type`
--

CREATE TABLE `tbl_cell_line_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_cell_line_type`
--

INSERT INTO `tbl_cell_line_type` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'CHO', NULL, 1, '2024-09-21 13:50:25', NULL, NULL, 1, NULL),
(2, 'HEK', NULL, 1, '2024-09-21 13:50:25', NULL, NULL, 1, NULL),
(3, 'Stem Cells', NULL, 1, '2024-09-21 13:50:25', NULL, NULL, 1, NULL),
(4, 'Non Stem Cells', NULL, 1, '2024-09-21 13:50:25', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company_master`
--

CREATE TABLE `tbl_company_master` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_company_master`
--

INSERT INTO `tbl_company_master` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'Non Proprietary', NULL, 1, '2024-09-21 13:53:25', NULL, NULL, 1, NULL),
(2, 'Thermo Fisher Scientific', NULL, 1, '2024-09-21 13:53:25', NULL, NULL, 1, NULL),
(3, 'ATCC', NULL, 1, '2024-09-21 13:53:25', NULL, NULL, 1, NULL),
(4, 'PBS Mini', NULL, 1, '2024-09-21 13:53:25', NULL, NULL, 1, NULL),
(5, 'Sartorius', NULL, 1, '2024-09-21 13:53:25', NULL, NULL, 1, NULL),
(6, 'Eppendorf', NULL, 1, '2024-09-21 13:53:25', NULL, NULL, 1, NULL),
(7, 'Irvine Scientific', NULL, 1, '2024-09-21 14:31:25', NULL, NULL, 1, NULL),
(8, 'MilliporeSigma (Sigma-Aldrich)', NULL, 1, '2024-09-21 14:31:25', NULL, NULL, 1, NULL),
(9, 'Thermo Fisher Scientific (Gibco)', NULL, 1, '2024-09-21 14:31:25', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_datum`
--

CREATE TABLE `tbl_datum` (
  `id` int(11) NOT NULL,
  `result_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  `field_value` float NOT NULL,
  `unit_id` int(11) NOT NULL,
  `recorded_at` datetime DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_datum`
--

INSERT INTO `tbl_datum` (`id`, `result_id`, `field_id`, `field_value`, `unit_id`, `recorded_at`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 1, 1, 120, 12, NULL, NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_datum_field`
--

CREATE TABLE `tbl_datum_field` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `data_type` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_datum_field`
--

INSERT INTO `tbl_datum_field` (`id`, `name`, `data_type`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', 'character', 'this is test', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_department`
--

CREATE TABLE `tbl_department` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `organization_id` int(11) NOT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_department`
--

INSERT INTO `tbl_department` (`id`, `name`, `description`, `organization_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', 'this is test of nakya', 1, NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement`
--

CREATE TABLE `tbl_expirement` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `author_id` int(11) NOT NULL,
  `experiment_type_id` int(11) NOT NULL,
  `organization_id` int(11) NOT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement`
--

INSERT INTO `tbl_expirement` (`id`, `name`, `description`, `author_id`, `experiment_type_id`, `organization_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', 'this is test', 12, 12, 11, NULL, NULL, NULL, NULL, 1, NULL),
(2, 'admin', 'nakya test', 12, 22, 34, NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement_configuration`
--

CREATE TABLE `tbl_expirement_configuration` (
  `id` int(11) NOT NULL,
  `expirement_id` int(11) NOT NULL,
  `vessel_type_id` int(11) NOT NULL,
  `media_type_id` int(11) NOT NULL,
  `cell_line_type_id` int(11) NOT NULL,
  `temperature` int(11) NOT NULL,
  `ph_level` float NOT NULL,
  `initial_volume_ml` float NOT NULL,
  `additional_parameters` varchar(200) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement_configuration`
--

INSERT INTO `tbl_expirement_configuration` (`id`, `expirement_id`, `vessel_type_id`, `media_type_id`, `cell_line_type_id`, `temperature`, `ph_level`, `initial_volume_ml`, `additional_parameters`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 123, 12, 46, 16, 16, 156, 245, 'nakya', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement_result`
--

CREATE TABLE `tbl_expirement_result` (
  `id` int(11) NOT NULL,
  `expirement_run_id` int(11) NOT NULL,
  `result_time` datetime DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement_result`
--

INSERT INTO `tbl_expirement_result` (`id`, `expirement_run_id`, `result_time`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 121, '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement_run`
--

CREATE TABLE `tbl_expirement_run` (
  `id` int(11) NOT NULL,
  `expirement_id` int(11) NOT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement_run`
--

INSERT INTO `tbl_expirement_run` (`id`, `expirement_id`, `start_time`, `end_time`, `status_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 1, '2024-09-17 05:27:22', '2024-11-14 16:29:41', 121, NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement_run_status`
--

CREATE TABLE `tbl_expirement_run_status` (
  `id` int(11) NOT NULL,
  `status_name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement_run_status`
--

INSERT INTO `tbl_expirement_run_status` (`id`, `status_name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', 'nakya testing', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement_status`
--

CREATE TABLE `tbl_expirement_status` (
  `id` int(11) NOT NULL,
  `run_status_name` varchar(100) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement_status`
--

INSERT INTO `tbl_expirement_status` (`id`, `run_status_name`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expirement_type`
--

CREATE TABLE `tbl_expirement_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_expirement_type`
--

INSERT INTO `tbl_expirement_type` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', 'this is testing of nakya', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_instrument`
--

CREATE TABLE `tbl_instrument` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `manufacturer` varchar(100) DEFAULT NULL,
  `in_model` varchar(100) DEFAULT NULL,
  `calibration_date` date DEFAULT NULL,
  `instrument_type_id` int(11) NOT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_instrument`
--

INSERT INTO `tbl_instrument` (`id`, `name`, `description`, `manufacturer`, `in_model`, `calibration_date`, `instrument_type_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya instrument', 'this is nakay testing of instrumrent', 'nakya', 'nakay model', '2024-12-17', 121, NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_instrument_type`
--

CREATE TABLE `tbl_instrument_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_instrument_type`
--

INSERT INTO `tbl_instrument_type` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya', 'testing', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_type`
--

CREATE TABLE `tbl_media_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_media_type`
--

INSERT INTO `tbl_media_type` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'Adherent', NULL, 1, '2024-09-21 14:29:56', NULL, NULL, 1, NULL),
(2, 'Suspension', NULL, 1, '2024-09-21 14:29:56', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_organization`
--

CREATE TABLE `tbl_organization` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_organization`
--

INSERT INTO `tbl_organization` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakaya organization', 'nakaya testing of oraganization', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sub_cell_line`
--

CREATE TABLE `tbl_sub_cell_line` (
  `id` int(11) NOT NULL,
  `cell_line_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_sub_cell_line`
--

INSERT INTO `tbl_sub_cell_line` (`id`, `cell_line_id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 2, 'HEK293', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(2, 2, 'HEK293', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(3, 2, 'HEK293T', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(4, 2, 'HEK293FT', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(5, 2, 'HEK293E', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(6, 2, 'Expi293F Cells', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(7, 2, 'Expi293 GnTI-Cells', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(8, 2, 'Expi293F GnTI-Cells', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(9, 2, 'HEK293S GnTI - (ATCC CLR-3022)', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL),
(10, 2, 'HEK293T/17 (ATCC CLR-11268)', NULL, 1, '2024-09-21 13:55:48', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sub_vessel_type`
--

CREATE TABLE `tbl_sub_vessel_type` (
  `id` int(11) NOT NULL,
  `vessel_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_sub_vessel_type`
--

INSERT INTO `tbl_sub_vessel_type` (`id`, `vessel_id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 1, '35mm Cell Culture Dish', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(2, 1, '75cm (T75) Cell Culture Flask', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(3, 1, '6 Well Multiwell Plate', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(4, 1, '60mm Cell Culture Dish', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(5, 1, '2-tray (1264 cm) Nuc Cell Factory Systems', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(6, 2, '0.1L PBS Mini NagDrive Bioreactor', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(7, 2, '0.5L PBS Mini NagDrive Bioreactor 2', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(8, 2, '125mL Disposable Spinner Flask 1', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(9, 2, '25mL Disposable Spinner Flask', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(10, 2, '3L Disposable Spinner Flask', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(11, 3, '2L BIOSTAT RM Wave', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(12, 3, '1L BIOSTAT D-CU Stir Tank Bioreactor', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(13, 3, '2L BIOSTAT STR Stir Tank Single Use Bioreactors', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(14, 3, '5L BioFlo Stir Stank Bioreactor', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(15, 3, '0.3L BioBLU 0.3Cr Stir Stank Bioreactor', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL),
(16, 3, '1.25L BioBLU 1p Stir Stank Bioreactor', NULL, 1, '2024-09-21 14:18:28', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tag`
--

CREATE TABLE `tbl_tag` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `tag_type_id` int(11) NOT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_tag`
--

INSERT INTO `tbl_tag` (`id`, `name`, `description`, `tag_type_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya tag', 'testing of nakya tag', 12, NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tag_type`
--

CREATE TABLE `tbl_tag_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_tag_type`
--

INSERT INTO `tbl_tag_type` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakaya tag_type', 'this is testing of nakya tag_type', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_unit`
--

CREATE TABLE `tbl_unit` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `symbol` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_unit`
--

INSERT INTO `tbl_unit` (`id`, `name`, `symbol`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'nakya unit', 'unit symbol', 'testing of unit', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password_hash` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL,
  `user_role` int(11) NOT NULL,
  `organization_id` int(11) NOT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `email`, `password_hash`, `department_id`, `user_role`, `organization_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`, `last_login`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin', 1, 1, 1, NULL, NULL, NULL, NULL, 1, NULL, NULL),
(2, 'yash', 'yash@gmail.com', 'yash', 121, 11, 1214, NULL, NULL, NULL, NULL, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vessel_type`
--

CREATE TABLE `tbl_vessel_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `add_uid` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `del_uid` int(11) DEFAULT NULL,
  `del_date` datetime DEFAULT NULL,
  `rec_status` tinyint(1) NOT NULL DEFAULT 1,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_vessel_type`
--

INSERT INTO `tbl_vessel_type` (`id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES
(1, 'Adherent', NULL, 1, '2024-09-21 14:01:37', NULL, NULL, 1, NULL),
(2, 'Suspension', NULL, 1, '2024-09-21 14:01:37', NULL, NULL, 1, NULL),
(3, 'Bioreactors', NULL, 1, '2024-09-21 14:01:37', NULL, NULL, 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_cell_line_type`
--
ALTER TABLE `tbl_cell_line_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_company_master`
--
ALTER TABLE `tbl_company_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_datum`
--
ALTER TABLE `tbl_datum`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_datum_field`
--
ALTER TABLE `tbl_datum_field`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_department`
--
ALTER TABLE `tbl_department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement`
--
ALTER TABLE `tbl_expirement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement_configuration`
--
ALTER TABLE `tbl_expirement_configuration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement_result`
--
ALTER TABLE `tbl_expirement_result`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement_run`
--
ALTER TABLE `tbl_expirement_run`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement_run_status`
--
ALTER TABLE `tbl_expirement_run_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement_status`
--
ALTER TABLE `tbl_expirement_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expirement_type`
--
ALTER TABLE `tbl_expirement_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_instrument`
--
ALTER TABLE `tbl_instrument`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_instrument_type`
--
ALTER TABLE `tbl_instrument_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_media_type`
--
ALTER TABLE `tbl_media_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_organization`
--
ALTER TABLE `tbl_organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sub_cell_line`
--
ALTER TABLE `tbl_sub_cell_line`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sub_vessel_type`
--
ALTER TABLE `tbl_sub_vessel_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tag`
--
ALTER TABLE `tbl_tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tag_type`
--
ALTER TABLE `tbl_tag_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_vessel_type`
--
ALTER TABLE `tbl_vessel_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cell_line_type`
--
ALTER TABLE `tbl_cell_line_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_company_master`
--
ALTER TABLE `tbl_company_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_datum`
--
ALTER TABLE `tbl_datum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_datum_field`
--
ALTER TABLE `tbl_datum_field`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_department`
--
ALTER TABLE `tbl_department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_expirement`
--
ALTER TABLE `tbl_expirement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_expirement_configuration`
--
ALTER TABLE `tbl_expirement_configuration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_expirement_result`
--
ALTER TABLE `tbl_expirement_result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_expirement_run`
--
ALTER TABLE `tbl_expirement_run`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_expirement_run_status`
--
ALTER TABLE `tbl_expirement_run_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_expirement_status`
--
ALTER TABLE `tbl_expirement_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_expirement_type`
--
ALTER TABLE `tbl_expirement_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_instrument`
--
ALTER TABLE `tbl_instrument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_instrument_type`
--
ALTER TABLE `tbl_instrument_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_media_type`
--
ALTER TABLE `tbl_media_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_organization`
--
ALTER TABLE `tbl_organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_sub_cell_line`
--
ALTER TABLE `tbl_sub_cell_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_sub_vessel_type`
--
ALTER TABLE `tbl_sub_vessel_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_tag`
--
ALTER TABLE `tbl_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_tag_type`
--
ALTER TABLE `tbl_tag_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_vessel_type`
--
ALTER TABLE `tbl_vessel_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
