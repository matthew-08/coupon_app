--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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
-- Name: coupon_app; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE coupon_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE coupon_app OWNER TO postgres;

\connect coupon_app 
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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: coupon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coupon (
    id integer NOT NULL,
    deal character varying(255),
    company character varying(255),
    validthroughstart bigint,
    validthroughend bigint,
    icon character varying(255)
);


ALTER TABLE public.coupon OWNER TO postgres;

--
-- Name: coupon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coupon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coupon_id_seq OWNER TO postgres;

--
-- Name: coupon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coupon_id_seq OWNED BY public.coupon.id;


--
-- Name: user_coupon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_coupon (
    id integer NOT NULL,
    user_id integer NOT NULL,
    coupon_id integer NOT NULL,
    redeemedat character varying(250) NOT NULL,
    redeemed boolean,
    code text
);


ALTER TABLE public.user_coupon OWNER TO postgres;

--
-- Name: user_coupon_coupon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_coupon_coupon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_coupon_coupon_id_seq OWNER TO postgres;

--
-- Name: user_coupon_coupon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_coupon_coupon_id_seq OWNED BY public.user_coupon.coupon_id;


--
-- Name: user_coupon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_coupon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_coupon_id_seq OWNER TO postgres;

--
-- Name: user_coupon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_coupon_id_seq OWNED BY public.user_coupon.id;


--
-- Name: user_coupon_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_coupon_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_coupon_user_id_seq OWNER TO postgres;

--
-- Name: user_coupon_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_coupon_user_id_seq OWNED BY public.user_coupon.user_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(250) NOT NULL,
    name character varying(250) NOT NULL,
    passhash character varying(250) NOT NULL,
    createdate character varying(250) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: coupon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon ALTER COLUMN id SET DEFAULT nextval('public.coupon_id_seq'::regclass);


--
-- Name: user_coupon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_coupon ALTER COLUMN id SET DEFAULT nextval('public.user_coupon_id_seq'::regclass);


--
-- Name: user_coupon user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_coupon ALTER COLUMN user_id SET DEFAULT nextval('public.user_coupon_user_id_seq'::regclass);


--
-- Name: user_coupon coupon_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_coupon ALTER COLUMN coupon_id SET DEFAULT nextval('public.user_coupon_coupon_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: coupon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coupon (id, deal, company, validthroughstart, validthroughend, icon) FROM stdin;
4	15% Cashback	Playstation	1688603913	1689889486	playstation
5	5% Off	Dropbox	1686802833	1688753476	dropbox
6	4% Off	Google	1689289272	1689349121	google-wallet
7	15% Off	Steam	1689855574	1690021347	steam
8	10% Off	Battle.net	1689286695	1689880679	battle-net
9	30% Cashback	Apple Wallet	1689216080	1690273841	apple-pay
10	15% Off	Ebay  	1685114168	1685667498	ebay
11	5% Cashback	Itunes	1685001925	1688206250	itunes
12	45% Off	Audible	1684387762	1688014231	audible
13	25% Off	Amazon Pay	1683179041	1684586158	amazon-pay
\.


--
-- Data for Name: user_coupon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_coupon (id, user_id, coupon_id, redeemedat, redeemed, code) FROM stdin;
5	4	5	1684129918046	t	\N
6	4	13	1684131086918	t	\N
7	4	4	1684146312012	t	\N
8	4	6	1684146751873	t	\N
9	4	7	1684146804703	t	\N
10	4	11	1684146824376	t	\N
11	4	8	1684146841109	t	\N
12	4	12	1684146845064	t	\N
13	5	5	1684148424204	t	916F
14	4	9	1684158155866	t	178U
15	6	9	1684158626389	t	917G
16	6	5	1684158645425	t	121P
17	6	6	1684158839735	t	747J
18	4	10	1684159567581	t	652Y
19	6	7	1684159953561	t	573Z
20	6	10	1684165815916	t	246H
21	6	8	1684165827031	t	179H
22	6	11	1684165833349	t	559P
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, name, passhash, createdate) FROM stdin;
1	test	test	test	test
2	test	test	test	test
3	email@gmail.com	person person	AValidPassword@4	AValidPassword@4
4	testuser3000@gmail.com	Heloagag	$2b$10$jz655ax7JDEHIf12Wj/QGOL2xJgeVM819we.HMlDx5/85tIpgrtM.	3
5	testudeg00@gmail.com	Heloagag	$2b$10$Ai.3YxtOr9GiI0rma0vkMe2CQorL3rsvubgqQkhYqu4vu5YLMr4EC	3
6	TestEmail01@gmail.com	Person	$2b$10$ecfQYQtYbJyfZ2pDxFfK0.DDQNfB68EBL4PwqhzplOsqKUhz99tDy	3
\.


--
-- Name: coupon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coupon_id_seq', 13, true);


--
-- Name: user_coupon_coupon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_coupon_coupon_id_seq', 1, false);


--
-- Name: user_coupon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_coupon_id_seq', 22, true);


--
-- Name: user_coupon_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_coupon_user_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: coupon coupon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon
    ADD CONSTRAINT coupon_pkey PRIMARY KEY (id);


--
-- Name: user_coupon user_coupon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_coupon
    ADD CONSTRAINT user_coupon_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: user_coupon user_coupon_coupon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_coupon
    ADD CONSTRAINT user_coupon_coupon_id_fkey FOREIGN KEY (coupon_id) REFERENCES public.coupon(id);


--
-- Name: user_coupon user_coupon_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_coupon
    ADD CONSTRAINT user_coupon_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

