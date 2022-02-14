import { CheckBox } from "src/component/CheckBox";

type Props = {
  todayList: string[];
  tomorrowList: string[];
  nextList: string[];
};

export const TodoList = ({ nextList, todayList, tomorrowList }: Props) => (
  <>
    <div className="py-2 px-4">
      <CheckBox
        color="text-rose-500"
        backgroundColor="bg-rose-500"
        label="今日する"
        todoList={todayList}
      />
      <CheckBox
        color="text-orange-400"
        backgroundColor="bg-orange-400"
        label="明日する"
        todoList={tomorrowList}
      />
      <CheckBox
        color="text-amber-400"
        backgroundColor="bg-amber-400"
        label="今度する"
        todoList={nextList}
      />
    </div>
  </>
);
