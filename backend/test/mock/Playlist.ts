export default class PlaylistMock {

    static getPlaylist() {
        return {
            id: 1,
            name: 'Playlist 1',
            description: 'Description 1',
            author: 'Author 1',
            createdAt: new Date(),
            content: [
                {
                    id: 1,
                    playlistId: 1,
                    title: 'Title 1',
                    url: 'https://www.youtube.com/watch?v=1',
                    author: 'Author 1',
                    createdAt: new Date()
                },
                {
                    id: 2,
                    playlistId: 2,
                    title: 'Title 2',
                    url: 'https://www.youtube.com/watch?v=2',
                    author: 'Author 2',
                    createdAt: new Date()
                },
            ]
        }
    }
}