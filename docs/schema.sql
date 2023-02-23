DROP TABLE player;
DROP TABLE game;

CREATE TABLE player (
  personID int,
  gameID,
  playerName varchar(255),
  rating int
);

CREATE TABLE game (
  gameID,
  personID,
  players
  result
);

INSERT INTO player (playerName, rating)
VALUES ('Billy', 1400, 'Mark', 1350);

INSERT INTO game (players, result)
VALUES ('Billy and Mark', 'loss');