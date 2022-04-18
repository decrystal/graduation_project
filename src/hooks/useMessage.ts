import { ElNotification } from 'element-plus';
import { h } from 'vue';
const nofication = (title: string, message: string) => {
  ElNotification({
    title: title,
    message: h('i', { style: 'color: teal' }, message),
  });
};

export default function useMessage() {
  return {
    notification: nofication,
  };
}
