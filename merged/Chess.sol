pragma solidity ^0.8.17;


// SPDX-License-Identifier: MIT
contract ChessGame {
    enum Status {
        Created,
        Started,
        Paused,
        Finished
    }

    struct Point {
        uint8 x;
        uint8 y;
    }

    struct Game {
        Status status;
        address playerW;
        address playerB;
        mapping(uint256 => Point) board;
        mapping(uint256 => Status) pieces;
    }

    mapping(uint256 => Game) public games;

    modifier onlyPlayers(uint256 gameId) {
        require(
            msg.sender == games[gameId].playerW || msg.sender == games[gameId].playerB,
            "Only players can pause the game"
        );
        _;
    }

    function createGame(address playerW, address playerB) external {
        uint256 gameId = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));

        games[gameId].status = Status.Created;
        games[gameId].playerW = playerW;
        games[gameId].playerB = playerB;
    }

    function startGame(uint256 gameId) external onlyPlayers(gameId) {
        games[gameId].status = Status.Started;
    }

    function pauseGame(uint256 gameId) external onlyPlayers(gameId) {
        games[gameId].status = Status.Paused;
    }

    function fihishGame(uint256 gameId) external onlyPlayers(gameId) {
        games[gameId].status = Status.Finished;
    }

    function movePiece(uint256 gameId, uint256 pieceId, Point memory to) external onlyPlayers(gameId) {
        games[gameId].board[pieceId] = to;
    }
}