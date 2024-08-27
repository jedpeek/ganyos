"use client";

import { useState, useEffect } from "react";
import Album from "./album";
export default function Albums() {
  // const [accessToken, setAccessToken] = useState("");
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        process.env.NEXT_PUBLIC_SPOTIFY_ID +
        "&client_secret=" +
        process.env.NEXT_PUBLIC_SPOTIFY_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((res) => res.json())
      .then((data) => {
        fetch(
          "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO3skzbb/tracks",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + data.access_token,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setPlaylistData(data.items));
      });
  }, []);

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 p-4 sm:p-6 md:p-8">
      {playlistData.map((song) => {
        return (
          <Album
            key={song.track.external_urls.spotify}
            title={song.track.name}
            artist={song.track.artists[0].name}
            image={song.track.album.images[0].url}
            link={song.track.external_urls.spotify}
          />
        );
      })}
    </section>
  );
}
