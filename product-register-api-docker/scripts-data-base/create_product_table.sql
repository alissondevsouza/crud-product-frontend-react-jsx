CREATE SEQUENCE product_seq START 1;

CREATE TABLE IF NOT EXISTS product (
    id numeric(38) NOT NULL DEFAULT nextval('product_seq'),
    product_name VARCHAR(50) NOT NULL,
    price VARCHAR(10) NOT NULL,
    description VARCHAR(100) NOT NULL
);

CREATE INDEX product_id_idx ON product (id);