import AlfonsobotDialog from './alfonsobotDialog';
import UserDialog from './userDialog';
import SendInput from './sendInput';

export default function Alfonsobot() {
  return (
    <div className="h-[65vh] flex flex-col">
      <div className="bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)] flex-1 overflow-y-scroll">
        <div className="px-4 py-2">
          <AlfonsobotDialog response={<p>Hola!</p>} />

          <UserDialog response={<p>Dale que va</p>} />
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-inherit px-4 py-2">
        <SendInput />
      </div>
    </div>
  );
}
