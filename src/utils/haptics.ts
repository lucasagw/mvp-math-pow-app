import * as Haptics from 'expo-haptics';

const impacts = {
  ligth: Haptics.ImpactFeedbackStyle.Light,
  medium: Haptics.ImpactFeedbackStyle.Medium,
  heavy: Haptics.ImpactFeedbackStyle.Heavy,
};

class HapticsFeedback {
  static handleImpactFeedback = async (
    impact: Haptics.ImpactFeedbackStyle = impacts['ligth']
  ) => {
    await Haptics.impactAsync(impact);
  };
  static handleSelectionFeedback = async () => {
    await Haptics.selectionAsync();
  };

  static handleNotificationFeedback = async (
    type: Haptics.NotificationFeedbackType
  ) => {
    await Haptics.notificationAsync(type);
  };
}

export default HapticsFeedback;
