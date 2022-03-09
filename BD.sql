--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-03-08 02:37:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3305 (class 0 OID 16719)
-- Dependencies: 210
-- Data for Name: alumnos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alumnos (id, nombre, rut, curso, nivel) FROM stdin;
1	Fernando Donoso	13.991.987-4	Javascript	2
\.


--
-- TOC entry 3312 (class 0 OID 0)
-- Dependencies: 209
-- Name: alumnos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alumnos_id_seq', 1, true);


-- Completed on 2022-03-08 02:37:22

--
-- PostgreSQL database dump complete
--

