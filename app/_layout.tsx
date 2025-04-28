import { Tabs } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function Layout() {
  return <Tabs />;
}
