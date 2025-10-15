class PlaybackManager {
  max = 1;
  playing = new Set<HTMLVideoElement>();

  play(v: HTMLVideoElement) {
    if (!this.playing.has(v)) {
      if (this.playing.size >= this.max) {
        const first = this.playing.values().next().value as HTMLVideoElement;
        this.pause(first);
      }
      this.playing.add(v);
    }
    v.play().catch(() => {});
  }

  pause(v: HTMLVideoElement) {
    v.pause();
    this.playing.delete(v);
  }
}
export const playbackManager = new PlaybackManager();
