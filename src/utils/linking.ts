import * as linking from 'expo-linking';

class Linking {
  private async canOpenUrl(url: string) {
    return await linking.canOpenURL(url);
  }
  async handleOpenURL(url: string) {
    try {
      const result = await this.canOpenUrl(url);
      if (!result) return;
      await linking.openURL(url);
    } catch (error) {
      console.log('Error opening URL ', error);
    }
  }
  async useUrl() {
    return linking.useURL();
  }
}

const linkingHandler = new Linking();

export default linkingHandler;
