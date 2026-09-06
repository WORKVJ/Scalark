// Sound controller safely muted for clean executive experience
class SoundController {
  constructor() {
    this.muted = true;
  }
  init() {}
  toggleMute() { return true; }
  isMuted() { return true; }
  playHover() {}
  playClick() {}
  playChime() {}
}

export const soundFx = new SoundController();
