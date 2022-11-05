import { NativeModules, Platform } from 'react-native';

import {
  requireNativeComponent,
  UIManager,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-au10tixsdc' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Au10tixsdc = NativeModules.Au10tixsdc  ? NativeModules.Au10tixsdc  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Au10tixsdc.multiply(a, b);
}

type SdcviewProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SdcviewView';

export const SdcviewView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SdcviewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };