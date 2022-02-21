import { CheckBox } from "src/component/CheckBox/CheckBox";
import type { Todo } from "src/models/Todo";

type Props = {
  todayList: Todo[];
  tomorrowList: Todo[];
  upcomingList: Todo[];
};

export const TodoList = ({ todayList, tomorrowList, upcomingList }: Props) => (
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
        todoList={upcomingList}
      />
    </div>
  </>
);
