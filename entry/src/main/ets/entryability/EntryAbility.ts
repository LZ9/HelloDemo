import UIAbility from '@ohos.app.ability.UIAbility';
import hilog from '@ohos.hilog';
import window from '@ohos.window';
import systemDateTime from '@ohos.systemDateTime';
import { Direction } from './Direction';

export default class EntryAbility extends UIAbility {
  onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', 'Ability onCreate');

    let isLoggable: Boolean = hilog.isLoggable(0x0000, "testTag", hilog.LogLevel.INFO);
    hilog.debug(0x0000, 'testTag', 'is can show info : ' + isLoggable);

    // number类型都是浮点型，支持十进制、二进制、八进制和十六进制，打印出来按十进制展示
    let decLiteral: number = 2023;
    hilog.debug(0x0000, 'testTag', 'decLiteral is ' + decLiteral);
    let binaryLiteral: number = 0b11111100111;
    hilog.debug(0x0000, 'testTag', 'binaryLiteral is ' + binaryLiteral);
    let octalLiteral: number = 0o3747;
    hilog.debug(0x0000, 'testTag', 'octalLiteral is ' + octalLiteral);
    let hexLiteral: number = 0x7e7;
    hilog.debug(0x0000, 'testTag', 'hexLiteral is ' + hexLiteral);

    let name: String = "Jack";
    hilog.debug(0x0000, 'testTag', 'name is ' + name);

    let list: number[] = [1, 2.1, 3];
    hilog.debug(0x0000, 'testTag', 'list is ' + list);
    let array: Array<number> = [0, -1, 0.6];
    hilog.debug(0x0000, 'testTag', 'array is ' + array);

    let x: [string, number, boolean];
    x = ['info', 1, true];
    hilog.debug(0x0000, 'testTag', 'x is [' + x + ']');

    let direction: Direction = Direction.Up
    hilog.debug(0x0000, 'testTag', 'direction is ' + direction);

    let notSure: unknown = 4;
    hilog.debug(0x0000, 'testTag', 'notSure maybe ' + notSure);
    notSure = 'string';
    hilog.debug(0x0000, 'testTag', 'notSure maybe ' + notSure);
    notSure = false;
    hilog.debug(0x0000, 'testTag', 'notSure maybe ' + notSure);

    // let fun = test();
    // hilog.debug(0x0000, 'testTag', 'fun result ' + fun);
    //
    // function test(): void {
    //   let time = systemDateTime.getCurrentTime()
    //   hilog.debug(0x0000, 'testTag', 'time is ' + notSure);
    // }

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
