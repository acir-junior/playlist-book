"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaylistMock {
    static getPlaylist() {
        return {
            id: 1,
            name: 'Playlist 1',
            description: 'Description 1',
            user_id: 1
        };
    }
}
exports.default = PlaylistMock;
