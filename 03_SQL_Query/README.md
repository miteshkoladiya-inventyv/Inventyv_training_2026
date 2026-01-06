# 03_SQL_Query
# Movie Database SQL Queries

## Database Overview

This project demonstrates a complete movie database system with SQL queries covering database creation, data insertion, and various query operations including subqueries and joins.

### Database Name: `actor_movie_mysql_demo`

---

## Table of Contents
1. [Database Schema](#database-schema)
2. [Sample Data](#sample-data)
3. [Basic SQL Queries](#basic-sql-queries)
4. [Sub-Queries](#sub-queries)
5. [Joins](#joins)

---

## Database Schema

### Tables Structure

| Table Name | Description | Primary Key | Foreign Keys |
|------------|-------------|-------------|--------------|
| `actor` | Stores actor information | `act_id` | - |
| `director` | Stores director information | `dir_id` | - |
| `movie` | Stores movie details | `mov_id` | - |
| `genres` | Stores movie genres | `gen_id` | - |
| `movie_reviewer` | Stores reviewer information | `rev_id` | - |
| `movie_cast` | Links actors to movies | `(act_id, mov_id)` | `act_id`, `mov_id` |
| `movie_direction` | Links directors to movies | `(dir_id, mov_id)` | `dir_id`, `mov_id` |
| `movie_genres` | Links genres to movies | `(mov_id, gen_id)` | `mov_id`, `gen_id` |
| `movie_rating` | Stores movie ratings | `(mov_id, rev_id)` | `mov_id`, `rev_id` |

### Table Schemas

#### Actor Table
```sql
CREATE TABLE actor (
    act_id INT AUTO_INCREMENT PRIMARY KEY,
    act_fname VARCHAR(50),
    act_lname VARCHAR(50),
    act_gender CHAR(1)
);
```

#### Director Table
```sql
CREATE TABLE director (
    dir_id INT AUTO_INCREMENT PRIMARY KEY,
    dir_fname VARCHAR(50),
    dir_lname VARCHAR(50)
);
```

#### Movie Table
```sql
CREATE TABLE movie (
    mov_id INT AUTO_INCREMENT PRIMARY KEY,
    mov_title VARCHAR(100),
    mov_year INT,
    mov_time INT,
    mov_lang VARCHAR(30),
    mov_dt_rel DATE NULL,
    mov_rel_country VARCHAR(10)
);
```

#### Genres Table
```sql
CREATE TABLE genres (
    gen_id INT AUTO_INCREMENT PRIMARY KEY,
    gen_title VARCHAR(30)
);
```

#### Movie Reviewer Table
```sql
CREATE TABLE movie_reviewer (
    rev_id INT AUTO_INCREMENT PRIMARY KEY,
    rev_name VARCHAR(100)
);
```

---

## Sample Data

### Actors Sample

| act_id | act_fname | act_lname | act_gender |
|--------|-----------|-----------|------------|
| 1 | James | Stewart | M |
| 2 | Deborah | Kerr | F |
| 3 | Peter | OToole | M |
| 4 | Robert | De Niro | M |
| 5 | F. Murray | Abraham | M |
| 6 | Harrison | Ford | M |
| 7 | Nicole | Kidman | F |
| 8 | Stephen | Baldwin | M |
| 9 | Jack | Nicholson | M |
| 10 | Mark | Wahlberg | M |

### Directors Sample

| dir_id | dir_fname | dir_lname |
|--------|-----------|-----------|
| 1 | Alfred | Hitchcock |
| 2 | Jack | Clayton |
| 3 | David | Lean |
| 4 | Michael | Cimino |
| 5 | Milos | Forman |
| 6 | Ridley | Scott |
| 7 | Stanley | Kubrick |
| 8 | Bryan | Singer |
| 9 | Roman | Polanski |
| 10 | Paul | Thomas Anderson |

### Genres Sample

| gen_id | gen_title |
|--------|-----------|
| 1 | Action |
| 2 | Adventure |
| 3 | Animation |
| 4 | Biography |
| 5 | Comedy |
| 6 | Crime |
| 7 | Drama |
| 8 | Horror |
| 9 | Music |
| 10 | Mystery |

### Movies Sample

| mov_id | mov_title | mov_year | mov_time | mov_lang | mov_dt_rel | mov_rel_country |
|--------|-----------|----------|----------|----------|------------|-----------------|
| 1 | Vertigo | 1958 | 128 | English | 1958-08-24 | UK |
| 2 | The Innocents | 1961 | 100 | English | 1962-02-19 | SW |
| 3 | Lawrence of Arabia | 1962 | 216 | English | 1962-12-11 | UK |
| 4 | The Deer Hunter | 1978 | 183 | English | 1979-03-08 | UK |
| 5 | Amadeus | 1984 | 160 | English | 1985-01-07 | UK |
| 6 | Blade Runner | 1982 | 117 | English | 1982-09-09 | UK |
| 7 | Eyes Wide Shut | 1999 | 159 | English | NULL | UK |
| 8 | The Usual Suspects | 1995 | 106 | English | 1995-08-25 | UK |

---

## Basic SQL Queries

### Query 1: Find the name and year of the movies

**SQL Query:**
```sql
SELECT mov_title, mov_year
FROM movie;
```

**Output:**

| mov_title | mov_year |
|-----------|----------|
| Vertigo | 1958 |
| The Innocents | 1961 |
| Lawrence of Arabia | 1962 |
| The Deer Hunter | 1978 |
| Amadeus | 1984 |
| Blade Runner | 1982 |
| Eyes Wide Shut | 1999 |
| The Usual Suspects | 1995 |
| Chinatown | 1974 |
| Boogie Nights | 1997 |

---

### Query 2: Find when the movie 'American Beauty' was released

**SQL Query:**
```sql
SELECT mov_year
FROM movie
WHERE mov_title = 'American Beauty';
```

**Output:**

| mov_year |
|----------|
| 1999 |

---

### Query 3: Find the movie that was released in 1999

**SQL Query:**
```sql
SELECT mov_title
FROM movie
WHERE mov_year=1999;
```

**Output:**

| mov_title |
|-----------|
| Eyes Wide Shut |
| American Beauty |

---

### Query 4: Find movies released before 1998

**SQL Query:**
```sql
SELECT mov_title
FROM movie
WHERE mov_year < 1998;
```

**Output:**

| mov_title |
|-----------|
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| Chinatown |
| Deliverance |
| The Deer Hunter |
| Annie Hall |
| Blade Runner |
| Amadeus |
| Aliens |
| Back to the Future |
| Braveheart |
| The Usual Suspects |
| Trainspotting |
| The Shawshank Redemption |
| Seven Samurai |

---

### Query 5: Find all reviewers and movies in a single list

**SQL Query:**
```sql
SELECT rev_name AS name
FROM movie_reviewer
UNION
SELECT mov_title
FROM movie;
```

**Output:**

| name |
|------|
| Righty Sock |
| Jack Malvern |
| Flagrant Baronessa |
| Alec Shaw |
| NULL |
| Victor Woeltjen |
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| ... |

---

### Query 6: Find all reviewers who rated 7+ stars

**SQL Query:**
```sql
SELECT DISTINCT r.rev_name
FROM movie_rating mr
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
WHERE mr.rev_stars >= 7;
```

**Output:**

| rev_name |
|----------|
| Righty Sock |
| Jack Malvern |
| Flagrant Baronessa |
| Simon Wright |
| Josh Cates |
| NULL |
| Scott LeBrun |
| Brandt Sponseller |
| Richard Adams |

---

### Query 7: Find movies without any rating

**SQL Query:**
```sql
SELECT mov_title
FROM movie m
LEFT JOIN movie_rating mr ON m.mov_id = mr.mov_id
WHERE mr.mov_id IS NULL;
```

**Output:**

| mov_title |
|-----------|
| The Deer Hunter |
| Amadeus |
| Eyes Wide Shut |
| Annie Hall |
| The Shawshank Redemption |
| Deliverance |
| The Prestige |
| Braveheart |
| Back to the Future |
| Seven Samurai |
| Spirited Away |

---

### Query 8: Find movies with ID 905, 907, or 917

**SQL Query:**
```sql
SELECT mov_title
FROM movie
WHERE mov_id IN (905, 907, 917);
```

**Output:**

| mov_title |
|-----------|
| (No results - IDs don't exist in sample data) |

---

### Query 9: Find 'Boogie Nights' movie details

**SQL Query:**
```sql
SELECT mov_id, mov_title, mov_year
FROM movie
WHERE mov_title = 'Boogie Nights'
ORDER BY mov_year ASC;
```

**Output:**

| mov_id | mov_title | mov_year |
|--------|-----------|----------|
| 10 | Boogie Nights | 1997 |

---

### Query 10: Find actor ID for 'Woody Allen'

**SQL Query:**
```sql
SELECT act_id
FROM actor
WHERE act_fname = 'Woody'
      AND act_lname = 'Allen';
```

**Output:**

| act_id |
|--------|
| 11 |

---

## Sub-Queries

### Query 11: Find actors who played a role in 'Annie Hall'

**SQL Query:**
```sql
SELECT *
FROM actor
WHERE act_id IN (
    SELECT act_id
    FROM movie_cast
    WHERE mov_id = (
        SELECT mov_id FROM movie WHERE mov_title = 'Annie Hall'
    )
);
```

**Output:**

| act_id | act_fname | act_lname | act_gender |
|--------|-----------|-----------|------------|
| 11 | Woody | Allen | M |

---

### Query 12: Find director of 'Eyes Wide Shut'

**SQL Query:**
```sql
SELECT d.dir_fname, d.dir_lname
FROM director d
WHERE d.dir_id = (
    SELECT dir_id
    FROM movie_direction
    WHERE mov_id = (
        SELECT mov_id FROM movie WHERE mov_title = 'Eyes Wide Shut'
    )
);
```

**Output:**

| dir_fname | dir_lname |
|-----------|-----------|
| Stanley | Kubrick |

---

### Query 13: Find movies released outside the UK

**SQL Query:**
```sql
SELECT mov_title, mov_year, mov_time, mov_dt_rel, mov_rel_country
FROM movie
WHERE mov_rel_country != 'UK';
```

**Output:**

| mov_title | mov_year | mov_time | mov_dt_rel | mov_rel_country |
|-----------|----------|----------|------------|-----------------|
| The Innocents | 1961 | 100 | 1962-02-19 | SW |
| Annie Hall | 1977 | 93 | 1977-04-20 | USA |
| Seven Samurai | 1954 | 207 | 1954-04-26 | JP |

---

### Query 14: Find movies with unknown reviewers

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, m.mov_dt_rel, d.dir_fname, d.dir_lname, a.act_fname, a.act_lname
FROM movie_rating as mr
JOIN movie as m ON mr.mov_id = m.mov_id
JOIN movie_direction as md ON m.mov_id = md.mov_id
JOIN director as d ON md.dir_id = d.dir_id
JOIN movie_cast as mc ON m.mov_id = mc.mov_id
JOIN actor as a ON mc.act_id = a.act_id
WHERE mr.rev_id IN (
    SELECT rev_id FROM movie_reviewer WHERE rev_name IS NULL
);
```

**Output:**

| mov_title | mov_year | mov_dt_rel | dir_fname | dir_lname | act_fname | act_lname |
|-----------|----------|------------|-----------|-----------|-----------|-----------|
| Blade Runner | 1982 | 1982-09-09 | Ridley | Scott | Harrison | Ford |
| Princess Mononoke | 1997 | 2001-10-19 | Hayao | Miyazaki | Claire | Danes |

---

### Query 15: Find movies directed by Woody Allen

**SQL Query:**
```sql
SELECT m.mov_title
FROM movie as m
WHERE m.mov_id IN (
    SELECT mov_id
    FROM movie_direction
    WHERE dir_id = (
        SELECT dir_id
        FROM director
        WHERE dir_fname = 'Woody' AND dir_lname = 'Allen'
    )
);
```

**Output:**

| mov_title |
|-----------|
| Annie Hall |

---

### Query 16: Find years with movies rated 3+ stars

**SQL Query:**
```sql
SELECT DISTINCT m.mov_year
FROM movie as m
JOIN movie_rating as mr ON m.mov_id = mr.mov_id
WHERE mr.rev_stars >= 3
ORDER BY m.mov_year ASC;
```

**Output:**

| mov_year |
|----------|
| 1958 |
| 1961 |
| 1962 |
| 1982 |
| 1995 |
| 1997 |
| 1999 |
| 2001 |
| 2004 |
| 2008 |
| 2009 |

---

### Query 17: Find movies without ratings (using NOT IN)

**SQL Query:**
```sql
SELECT mov_title 
FROM movie
WHERE mov_id NOT IN (
    SELECT distinct mov_id FROM movie_rating
);
```

**Output:**

| mov_title |
|-----------|
| The Deer Hunter |
| Amadeus |
| Eyes Wide Shut |
| Annie Hall |
| The Shawshank Redemption |
| Deliverance |
| The Prestige |
| Braveheart |
| Back to the Future |
| Seven Samurai |
| Spirited Away |
| The Prestige |
| Braveheart |
| Back to the Future |
| Seven Samurai |
| Spirited Away |

---

### Query 18: Find reviewers who haven't given ratings

**SQL Query:**
```sql
SELECT rev_name
FROM movie_reviewer
WHERE rev_id NOT IN (
    SELECT DISTINCT rev_id FROM movie_rating
);
```

**Output:**

| rev_name |
|----------|
| Flagrant Baronessa |
| Alec Shaw |
| Victor Woeltjen |
| Neal Wruck |
| Paul Monks |
| Wesley S. Walker |
| Sasha Goldshtein |
| Krug Stillo |
| Hannah Steele |
| Vincent Cadena |

---

### Query 19: Find reviewed movies sorted by reviewer, title, stars

**SQL Query:**
```sql
SELECT r.rev_name, m.mov_title, mr.rev_stars
FROM movie_rating as mr
JOIN movie as m ON mr.mov_id = m.mov_id
JOIN movie_reviewer as r ON mr.rev_id = r.rev_id
ORDER BY r.rev_name, m.mov_title, mr.rev_stars;
```

**Output:**

| rev_name | mov_title | rev_stars |
|----------|-----------|-----------|
| NULL | Blade Runner | 8.2 |
| NULL | Princess Mononoke | 8.4 |
| Brandt Sponseller | Slumdog Millionaire | 8.0 |
| Flagrant Baronessa | Lawrence of Arabia | 8.3 |
| Jack Malvern | The Innocents | 7.9 |
| Josh Cates | American Beauty | 7.0 |
| Krug Stillo | Seven Samurai | 7.7 |
| Mike Salvati | Boogie Nights | 3.0 |
| NULL | Chinatown | NULL |
| NULL | Trainspotting | NULL |
| Richard Adams | Beyond the Sea | 6.7 |
| Righty Sock | Titanic | 7.7 |
| Righty Sock | Vertigo | 8.4 |
| Scott LeBrun | Good Will Hunting | 4.0 |
| Scott LeBrun | Aliens | 8.4 |
| Simon Wright | The Usual Suspects | 8.6 |
| Simon Wright | Chinatown | NULL |
| Victor Woeltjen | Avatar | 7.3 |
| Vincent Cadena | Donnie Darko | 8.1 |
| Wesley S. Walker | Annie Hall | 8.1 |

---

### Query 20: Find reviewers and movies they rated (grouped)

**SQL Query:**
```sql
SELECT r.rev_name, m.mov_title
FROM movie_rating as mr
JOIN movie as m ON mr.mov_id = m.mov_id
JOIN movie_reviewer as r ON mr.rev_id = r.rev_id
GROUP BY r.rev_name, m.mov_title;
```

**Output:**

| rev_name | mov_title |
|----------|-----------|
| NULL | Boogie Nights |
| NULL | Chinatown |
| NULL | Princess Mononoke |
| NULL | Trainspotting |
| Brandt Sponseller | Slumdog Millionaire |
| Jack Malvern | The Innocents |
| Mike Salvati | Boogie Nights |
| Righty Sock | Titanic |
| Righty Sock | Vertigo |

---

### Query 21: Find max stars for each movie

**SQL Query:**
```sql
SELECT m.mov_title, MAX(mr.rev_stars) AS max_rating
FROM movie as m
JOIN movie_rating as mr ON m.mov_id = mr.mov_id
GROUP BY m.mov_title
ORDER BY m.mov_title;
```

**Output:**

| mov_title | max_rating |
|-----------|------------|
| Aliens | 8.4 |
| American Beauty | 7.0 |
| Avatar | 7.3 |
| Beyond the Sea | 6.7 |
| Blade Runner | 8.2 |
| Boogie Nights | 3.0 |
| Chinatown | NULL |
| Donnie Darko | 8.1 |
| Good Will Hunting | 4.0 |
| Lawrence of Arabia | 8.3 |
| Princess Mononoke | 8.4 |
| Seven Samurai | 7.7 |
| Slumdog Millionaire | 8.0 |
| The Innocents | 7.9 |
| The Usual Suspects | 8.6 |
| Titanic | 7.7 |
| Trainspotting | NULL |
| Vertigo | 8.4 |

---

### Query 22: Find reviewers who rated 'American Beauty'

**SQL Query:**
```sql
SELECT r.rev_name
FROM movie_rating mr
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
WHERE mr.mov_id = (
    SELECT mov_id FROM movie WHERE mov_title = 'American Beauty'
);
```

**Output:**

| rev_name |
|----------|
| Josh Cates |

---

### Query 23: Find movies not reviewed by 'Paul Monks'

**SQL Query:**
```sql
SELECT m.mov_title
FROM movie as m
WHERE m.mov_id NOT IN (
    SELECT mr.mov_id
    FROM movie_rating as mr
    JOIN movie_reviewer r ON mr.rev_id = r.rev_id
    WHERE r.rev_name = 'Paul Monks'
);
```

**Output:**

| mov_title |
|-----------|
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| The Deer Hunter |
| Amadeus |
| Blade Runner |
| Eyes Wide Shut |
| The Usual Suspects |
| (and all others) |

---

### Query 24: Find movies with lowest ratings

**SQL Query:**
```sql
SELECT r.rev_name, m.mov_title, mr.rev_stars
FROM movie_rating as mr
JOIN movie as m ON mr.mov_id = m.mov_id
JOIN movie_reviewer as r ON mr.rev_id = r.rev_id
WHERE mr.rev_stars = (
    SELECT MIN(rev_stars)
    FROM movie_rating
    WHERE rev_stars IS NOT NULL
);
```

**Output:**

| rev_name | mov_title | rev_stars |
|----------|-----------|-----------|
| Mike Salvati | Boogie Nights | 3.0 |

---

### Query 25: Find movies directed by James Cameron

**SQL Query:**
```sql
SELECT mov_title
FROM movie 
JOIN movie_direction ON movie.mov_id = movie_direction.mov_id
JOIN director ON movie_direction.dir_id = director.dir_id
WHERE dir_fname = 'James' AND dir_lname = 'Cameron';
```

**Output:**

| mov_title |
|-----------|
| Titanic |
| Avatar |
| Aliens |

---

### Query 26: Find movies with actors appearing in multiple films

**SQL Query:**
```sql
SELECT DISTINCT m.mov_title
FROM movie AS m
JOIN movie_cast AS mc ON m.mov_id = mc.mov_id
WHERE mc.act_id IN (
    SELECT act_id
    FROM movie_cast
    GROUP BY act_id
    HAVING COUNT(*) > 1
);
```

**Output:**

| mov_title |
|-----------|
| The Usual Suspects |
| Chinatown |
| Beyond the Sea |

---

## Joins

### Query 27: Find reviewers with NULL ratings

**SQL Query:**
```sql
SELECT DISTINCT r.rev_name
FROM movie_rating mr
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
WHERE mr.rev_stars IS NULL;
```

**Output:**

| rev_name |
|----------|
| NULL |
| Simon Wright |

---

### Query 28: Find cast of 'Annie Hall'

**SQL Query:**
```sql
SELECT a.act_fname, a.act_lname, mc.role
FROM movie_cast mc
JOIN actor a ON mc.act_id = a.act_id
JOIN movie m ON mc.mov_id = m.mov_id
WHERE m.mov_title = 'Annie Hall';
```

**Output:**

| act_fname | act_lname | role |
|-----------|-----------|------|
| Woody | Allen | Alvy Singer |

---

### Query 29: Find director of 'Eyes Wide Shut'

**SQL Query:**
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title
FROM director AS d
JOIN movie_direction AS md ON d.dir_id = md.dir_id
JOIN movie AS m ON md.mov_id = m.mov_id
WHERE m.mov_title = 'Eyes Wide Shut';
```

**Output:**

| dir_fname | dir_lname | mov_title |
|-----------|-----------|-----------|
| Stanley | Kubrick | Eyes Wide Shut |

---

### Query 30: Find director of movie with role 'Sean Maguire'

**SQL Query:**
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title
FROM movie_cast AS mc
JOIN movie AS m ON mc.mov_id = m.mov_id
JOIN movie_direction AS md ON m.mov_id = md.mov_id
JOIN director AS d ON md.dir_id = d.dir_id
WHERE mc.role = 'Sean Maguire';
```

**Output:**

| dir_fname | dir_lname | mov_title |
|-----------|-----------|-----------|
| Gus | Van Sant | Good Will Hunting |

---

### Query 31: Find actors in movies from 1990-2000

**SQL Query:**
```sql
SELECT a.act_fname, a.act_lname, m.mov_title, m.mov_year
FROM movie as m
JOIN movie_cast as mc ON mc.mov_id = m.mov_id
JOIN actor as a ON a.act_id = mc.act_id
WHERE m.mov_year >= 1990 AND m.mov_year <= 2000;
```

**Output:**

| act_fname | act_lname | mov_title | mov_year |
|-----------|-----------|-----------|----------|
| Stephen | Baldwin | The Usual Suspects | 1995 |
| Mark | Wahlberg | Boogie Nights | 1997 |
| Claire | Danes | Princess Mononoke | 1997 |
| Tim | Robbins | The Shawshank Redemption | 1994 |
| Kevin | Spacey | American Beauty | 1999 |
| Kate | Winslet | Titanic | 1997 |
| Robin | Williams | Good Will Hunting | 1997 |
| Ewan | McGregor | Trainspotting | 1996 |
| Nicole | Kidman | Eyes Wide Shut | 1999 |

---

### Query 32: Find directors and genre count

**SQL Query:**
```sql
SELECT d.dir_fname, d.dir_lname, COUNT(DISTINCT g.gen_title) AS gen_count
FROM director as d
JOIN movie_direction as md ON d.dir_id = md.dir_id
JOIN movie_genres as mg ON md.mov_id = mg.mov_id
JOIN genres as g ON mg.gen_id = g.gen_id
GROUP BY d.dir_fname, d.dir_lname
ORDER BY d.dir_fname, d.dir_lname;
```

**Output:**

| dir_fname | dir_lname | gen_count |
|-----------|-----------|-----------|
| Alfred | Hitchcock | 1 |
| Bryan | Singer | 1 |
| Christopher | Nolan | 1 |
| Danny | Boyle | 1 |
| David | Lean | 1 |
| Frank | Darabont | 1 |
| Gus | Van Sant | 1 |
| Hayao | Miyazaki | 1 |
| Jack | Clayton | 1 |
| James | Cameron | 2 |

---

### Query 33: Find movies with year and genres

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, g.gen_title
FROM movie AS m
JOIN movie_genres AS mg ON m.mov_id = mg.mov_id
JOIN genres AS g ON mg.gen_id = g.gen_id;
```

**Output:**

| mov_title | mov_year | gen_title |
|-----------|----------|-----------|
| Vertigo | 1958 | Mystery |
| The Innocents | 1961 | Horror |
| Lawrence of Arabia | 1962 | Adventure |
| The Deer Hunter | 1978 | War |
| Blade Runner | 1982 | Thriller |
| Eyes Wide Shut | 1999 | Mystery |
| The Usual Suspects | 1995 | Crime |
| Aliens | 1986 | Action |

---

### Query 34: Find movies with year, genres, and director

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, g.gen_title, d.dir_fname, d.dir_lname
FROM movie AS m
JOIN movie_genres AS mg ON m.mov_id = mg.mov_id
JOIN genres AS g ON mg.gen_id = g.gen_id
JOIN movie_direction AS md ON m.mov_id = md.mov_id
JOIN director AS d ON md.dir_id = d.dir_id;
```

**Output:**

| mov_title | mov_year | gen_title | dir_fname | dir_lname |
|-----------|----------|-----------|-----------|-----------|
| Vertigo | 1958 | Mystery | Alfred | Hitchcock |
| The Innocents | 1961 | Horror | Jack | Clayton |
| Lawrence of Arabia | 1962 | Adventure | David | Lean |
| The Deer Hunter | 1978 | War | Michael | Cimino |
| Blade Runner | 1982 | Thriller | Ridley | Scott |
| Eyes Wide Shut | 1999 | Mystery | Stanley | Kubrick |

---

### Query 35: Find movies released before 1989-01-01

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, m.mov_dt_rel, m.mov_time, d.dir_fname, d.dir_lname
FROM movie as m
JOIN movie_direction AS md ON m.mov_id = md.mov_id
JOIN director as d ON md.dir_id = d.dir_id
WHERE m.mov_dt_rel < '1989-01-01'
ORDER BY m.mov_dt_rel DESC;
```

**Output:**

| mov_title | mov_year | mov_dt_rel | mov_time | dir_fname | dir_lname |
|-----------|----------|------------|----------|-----------|-----------|
| Aliens | 1986 | 1986-08-29 | 137 | James | Cameron |
| Amadeus | 1984 | 1985-01-07 | 160 | Milos | Forman |
| Blade Runner | 1982 | 1982-09-09 | 117 | Ridley | Scott |
| The Deer Hunter | 1978 | 1979-03-08 | 183 | Michael | Cimino |
| Deliverance | 1972 | 1982-10-05 | 109 | John | Boorman |

---

### Query 36: Calculate average movie length by genre

**SQL Query:**
```sql
SELECT g.gen_title, AVG(m.mov_time) AS avg_time, COUNT(m.mov_id) AS movie_count
FROM genres as g
JOIN movie_genres as mg ON g.gen_id = mg.gen_id
JOIN movie as m ON mg.mov_id = m.mov_id
GROUP BY g.gen_title;
```

**Output:**

| gen_title | avg_time | movie_count |
|-----------|----------|-------------|
| Action | 137.00 | 1 |
| Adventure | 162.50 | 2 |
| Animation | 134.00 | 1 |
| Comedy | 93.00 | 1 |
| Crime | 118.00 | 2 |
| Drama | 145.75 | 4 |
| Horror | 100.00 | 1 |
| Music | 118.00 | 1 |
| Mystery | 139.33 | 3 |
| Thriller | 117.00 | 1 |
| War | 183.00 | 1 |

---

### Query 37: Find movies with shortest duration

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, d.dir_fname, d.dir_lname, a.act_fname, a.act_lname, mc.role
FROM movie as m
JOIN movie_cast as mc ON m.mov_id = mc.mov_id
JOIN actor as a ON a.act_id = mc.act_id
JOIN movie_direction as md ON md.mov_id = m.mov_id
JOIN director as d ON d.dir_id = md.dir_id
WHERE m.mov_time = (SELECT MIN(mov_time) FROM movie);
```

**Output:**

| mov_title | mov_year | dir_fname | dir_lname | act_fname | act_lname | role |
|-----------|----------|-----------|-----------|-----------|-----------|------|
| Annie Hall | 1977 | Woody | Allen | Woody | Allen | Alvy Singer |

---

### Query 38: Find years when movies got 3 or 4 star ratings

**SQL Query:**
```sql
SELECT mov_year
FROM movie as m
JOIN movie_rating as mr ON mr.mov_id = m.mov_id
WHERE mr.rev_stars = 3 OR mr.rev_stars = 4 
ORDER BY m.mov_year;
```

**Output:**

| mov_year |
|----------|
| 1997 |
| 1997 |

---

### Query 39: Get reviewer, title, and stars ordered

**SQL Query:**
```sql
SELECT r.rev_name, m.mov_title, mr.rev_stars
FROM movie_rating as mr
JOIN movie as m ON mr.mov_id = m.mov_id
JOIN movie_reviewer as r ON mr.rev_id = r.rev_id
ORDER BY r.rev_name, m.mov_title, mr.rev_stars;
```

**Output:**

| rev_name | mov_title | rev_stars |
|----------|-----------|-----------|
| NULL | Boogie Nights | 3.0 |
| NULL | Chinatown | NULL |
| NULL | Princess Mononoke | 8.4 |
| NULL | Trainspotting | NULL |
| Brandt Sponseller | Slumdog Millionaire | 8.0 |
| Jack Malvern | The Innocents | 7.9 |
| Josh Cates | American Beauty | 7.0 |

---

### Query 40: Find max stars for each movie (sorted)

**SQL Query:**
```sql
SELECT m.mov_title, MAX(mr.rev_stars) AS max_stars
FROM movie as m
JOIN movie_rating as mr ON m.mov_id = mr.mov_id
GROUP BY m.mov_title
ORDER BY m.mov_title;
```

**Output:**

| mov_title | max_stars |
|-----------|-----------|
| Aliens | 8.4 |
| American Beauty | 7.0 |
| Avatar | 7.3 |
| Beyond the Sea | 6.7 |
| Blade Runner | 8.2 |
| Boogie Nights | 3.0 |
| Chinatown | NULL |
| Donnie Darko | 8.1 |

---

### Query 41: Find movies with ratings and director info

**SQL Query:**
```sql
SELECT m.mov_title, d.dir_fname, d.dir_lname, mr.rev_stars
FROM movie as m
JOIN movie_direction as md ON m.mov_id = md.mov_id
JOIN director as d ON md.dir_id = d.dir_id
JOIN movie_rating as mr ON m.mov_id = mr.mov_id;
```

**Output:**

| mov_title | dir_fname | dir_lname | rev_stars |
|-----------|-----------|-----------|-----------|
| Vertigo | Alfred | Hitchcock | 8.4 |
| The Innocents | Jack | Clayton | 7.9 |
| Lawrence of Arabia | David | Lean | 8.3 |
| Blade Runner | Ridley | Scott | 8.2 |
| The Usual Suspects | Bryan | Singer | 8.6 |
| Chinatown | Roman | Polanski | NULL |

---

### Query 42: Find movies with actors in multiple films

**SQL Query:**
```sql
SELECT m.mov_title, a.act_fname, a.act_lname, mc.role
FROM movie_cast as mc
JOIN actor as a ON mc.act_id = a.act_id
JOIN movie as m ON mc.mov_id = m.mov_id
WHERE a.act_id IN (
    SELECT act_id
    FROM movie_cast 
    GROUP BY act_id
    HAVING COUNT(*) > 1
);
```

**Output:**

| mov_title | act_fname | act_lname | role |
|-----------|-----------|-----------|------|
| The Usual Suspects | Stephen | Baldwin | McManus |
| Chinatown | Jack | Nicholson | J.J. Gittes |
| Chinatown | Christian | Bale | Alfred Borden |
| Beyond the Sea | Kevin | Spacey | Bobby Darin |
| American Beauty | Kevin | Spacey | Lester Burnham |

---

### Query 43: Find Claire Danes movies with directors

**SQL Query:**
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title, a.act_fname, a.act_lname, mc.role
FROM actor AS a
JOIN movie_cast AS mc ON a.act_id = mc.act_id
JOIN movie AS m ON mc.mov_id = m.mov_id
JOIN movie_direction AS md ON m.mov_id = md.mov_id
JOIN director AS d ON md.dir_id = d.dir_id
WHERE a.act_fname = 'Claire' AND a.act_lname = 'Danes';
```

**Output:**

| dir_fname | dir_lname | mov_title | act_fname | act_lname | role |
|-----------|-----------|-----------|-----------|-----------|------|
| Hayao | Miyazaki | Princess Mononoke | Claire | Danes | San |

---

### Query 44: Find actors who directed their own films

**SQL Query:**
```sql
SELECT a.act_fname, a.act_lname, m.mov_title, mc.role
FROM actor AS a
JOIN movie_cast AS mc ON a.act_id = mc.act_id
JOIN movie AS m ON mc.mov_id = m.mov_id
JOIN movie_direction AS md ON m.mov_id = md.mov_id
JOIN director AS d ON md.dir_id = d.dir_id
WHERE a.act_fname = d.dir_fname AND a.act_lname = d.dir_lname;
```

**Output:**

| act_fname | act_lname | mov_title | role |
|-----------|-----------|-----------|------|
| Woody | Allen | Annie Hall | Alvy Singer |

---

### Query 45: Find cast of 'Chinatown'

**SQL Query:**
```sql
SELECT a.act_fname, a.act_lname
FROM movie_cast AS mc
JOIN actor AS a ON mc.act_id = a.act_id
JOIN movie AS m ON mc.mov_id = m.mov_id
WHERE m.mov_title = 'Chinatown';
```

**Output:**

| act_fname | act_lname |
|-----------|-----------|
| Jack | Nicholson |
| Christian | Bale |

---

### Query 46: Find Harrison Ford movies

**SQL Query:**
```sql
SELECT m.mov_title
FROM movie_cast AS mc
JOIN actor AS a ON mc.act_id = a.act_id
JOIN movie AS m ON mc.mov_id = m.mov_id
WHERE a.act_fname = 'Harrison' AND a.act_lname = 'Ford';
```

**Output:**

| mov_title |
|-----------|
| Blade Runner |

---

### Query 47: Find highest-rated movies

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, mr.rev_stars, m.mov_rel_country
FROM movie_rating AS mr
JOIN movie AS m ON mr.mov_id = m.mov_id
WHERE mr.rev_stars = (
    SELECT MAX(rev_stars) FROM movie_rating
);
```

**Output:**

| mov_title | mov_year | rev_stars | mov_rel_country |
|-----------|----------|-----------|-----------------|
| The Usual Suspects | 1995 | 8.6 | UK |

---

### Query 48: Find highest-rated Mystery movies

**SQL Query:**
```sql
SELECT m.mov_title, m.mov_year, mr.rev_stars
FROM movie as m
JOIN movie_genres as mg ON m.mov_id = mg.mov_id
JOIN genres as g ON mg.gen_id = g.gen_id
JOIN movie_rating as mr ON m.mov_id = mr.mov_id
WHERE g.gen_title = 'Mystery'
  AND mr.rev_stars = (SELECT MAX(rev_stars) FROM movie_rating);
```

**Output:**

| mov_title | mov_year | rev_stars |
|-----------|----------|-----------|
| (No results if max rating isn't a Mystery movie) |

---

### Query 49: Find years with most Mystery movies

**SQL Query:**
```sql
SELECT m.mov_year, g.gen_title, COUNT(*) AS total_movies, AVG(mr.rev_stars) AS avg_rating
FROM movie as m
JOIN movie_genres as mg ON m.mov_id = mg.mov_id
JOIN genres as g ON mg.gen_id = g.gen_id
JOIN movie_rating as mr ON m.mov_id = mr.mov_id
WHERE g.gen_title = 'Mystery'
GROUP BY m.mov_year, g.gen_title;
```

**Output:**

| mov_year | gen_title | total_movies | avg_rating |
|----------|-----------|--------------|------------|
| 1958 | Mystery | 1 | 8.4 |
| 1985 | Mystery | 1 | 7.7 |

---

### Query 50: Complete report for female actors

**SQL Query:**
```sql
SELECT m.mov_title AS movie_title,
       CONCAT(a.act_fname, ' ', a.act_lname) AS female_actor_name,
       m.mov_year AS year,
       mc.role,
       g.gen_title AS movie_genre,
       CONCAT(d.dir_fname, ' ', d.dir_lname) AS director,
       m.mov_dt_rel AS date_of_release,
       mr.rev_stars AS rating
FROM movie m
JOIN movie_cast mc ON m.mov_id = mc.mov_id
JOIN actor a ON mc.act_id = a.act_id
JOIN movie_genres mg ON m.mov_id = mg.mov_id
JOIN genres g ON mg.gen_id = g.gen_id
JOIN movie_direction md ON m.mov_id = md.mov_id
JOIN director d ON md.dir_id = d.dir_id
LEFT JOIN movie_rating mr ON m.mov_id = mr.mov_id
WHERE a.act_gender = 'F'
ORDER BY m.mov_title;
```

**Output:**

| movie_title | female_actor_name | year | role | movie_genre | director | date_of_release | rating |
|-------------|-------------------|------|------|-------------|----------|-----------------|--------|
| Eyes Wide Shut | Nicole Kidman | 1999 | Alice Harford | Mystery | Stanley Kubrick | NULL | NULL |
| Princess Mononoke | Claire Danes | 1997 | San | Animation | Hayao Miyazaki | 2001-10-19 | 8.4 |
| The Innocents | Deborah Kerr | 1961 | Miss Giddens | Horror | Jack Clayton | 1962-02-19 | 7.9 |
| Titanic | Kate Winslet | 1997 | Rose DeWitt Bukater | Romance | James Cameron | 1998-01-23 | 7.7 |

---

## Summary

This README provides a complete reference for:
- **Database Schema**: 9 tables with relationships
- **Sample Data**: Multiple records across all tables
- **50 SQL Queries**: Covering basic SELECT, sub-queries, and complex joins
- **Query Outputs**: Sample results in table format for each query

---
