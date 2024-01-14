import UIAbility from '@ohos.app.ability.UIAbility';
import hilog from '@ohos.hilog';
import window from '@ohos.window';

export default class EntryAbility extends UIAbility {
  onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', 'Ability onCreate');

    let isLoggable: Boolean = hilog.isLoggable(0x0000, "testTag", hilog.LogLevel.INFO);
    hilog.debug(0x0000, 'testTag', 'is can show info : ' + isLoggable);

    let decLiteral: number = 2023;
    let binaryLiteral: number = 0b11111100111;
    let octalLiteral: number = 0o3747;
    let hexLiteral: number = 0x7e7;
    console.log('decLiteral is ' + decLiteral);
    console.log('binaryLiteral is ' + binaryLiteral);
    console.log('octalLiteral is ' + octalLiteral);
    console.log('hexLiteral is ' + hexLiteral);
  }

  onDestroy() {
    hilog.info(0x0000, 'testTag', '%{private}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground() {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}
