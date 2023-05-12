CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    passhash VARCHAR(250) NOT NULL,
    createdAt VARCHAR(250) NOT NULL 
);


CREATE TABLE coupon (
    id SERIAL PRIMARY KEY,
    img VARCHAR(250) NOT NULL,
    description VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    expirationDate VARCHAR(250) NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE user_coupon (
    id SERIAL PRIMARY KEY,
    user_id SERIAL REFERENCES users(id),
    coupon_id SERIAL REFERENCES coupon(id),
    reedemedAt VARCHAR(250) NOT NULL
)