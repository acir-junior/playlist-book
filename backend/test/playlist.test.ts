import PlaylistMock from "./mock/Playlist"

const playlistMock = PlaylistMock.getPlaylist();

it('test mock playlist properties', async () => {
    expect(playlistMock).toHaveProperty('id');
    expect(playlistMock).toHaveProperty('name');
    expect(playlistMock).toHaveProperty('description');
    expect(playlistMock).toHaveProperty('author');
    expect(playlistMock).toHaveProperty('createdAt');
    expect(playlistMock).toHaveProperty('content');
})