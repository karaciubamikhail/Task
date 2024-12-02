import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetTaskItems = "GET_Task_ITEMS",
  SetCreateModal = "SET_CREATE_MODAL",
  SetEditModal = "SET_EDIT_MODAL",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTaskItems](context: ActionAugments): void;
  [ActionTypes.SetCreateModal](context: ActionAugments): void;
  [ActionTypes.SetEditModal](context: ActionAugments): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTaskItems]({ commit }) {
    commit(MutationType.SetLoading, true);

    await sleep(1000);

    commit(MutationType.SetLoading, false);
    commit(MutationType.SetTasks, [
      {
        id: 1,
        title: "Create a new programming language",
        description:
          "The programing language should have full typescript support",
        createdBy: "Emmanuel John",
        assignedTo: "Saviour Peter",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "Build a Vue 3 app",
        description: "Vue 3 Task Management App with TypeScript and VueX 4",
        createdBy: "Arman Abkar",
        assignedTo: "Arman Abkar",
        completed: true,
        editing: false,
      },
      {
        id: 3,
        title: "Build a lorem ipsum generator app",
        description:
          "Eu Lorem esse sint irure do duis nisi commodo nostrud. Eu dolore Lorem do consectetur dolor esse nostrud Lorem id nulla. Id tempor esse in sint non consectetur culpa. Tempor pariatur velit occaecat sunt nostrud voluptate aliquip officia nulla eu eu reprehenderit. Ipsum aliqua mollit cupidatat ex.",
        createdBy: "Emmanuel John",
        assignedTo: "Jon Doe",
        completed: false,
        editing: false,
      },
      {
        id: 4,
        title: "Lorem Ipsum is the best!",
        description:
          "Tempor exercitation laborum amet sunt cillum ad. Dolor culpa fugiat ipsum dolore Lorem eu. Culpa elit id Lorem pariatur id nostrud aute qui officia quis veniam.",
        createdBy: "Arman Abkar",
        assignedTo: "Jon Skywalker",
        completed: true,
        editing: false,
      },
      {
        id: 5,
        title: "Learn React and Angular",
        description:
          "Adipisicing amet sint quis amet fugiat. Dolor non eiusmod eu elit. Eu nisi ut amet voluptate. Eu fugiat deserunt pariatur anim ea.",
        createdBy: "Emmanuel John",
        assignedTo: "Doe Jon",
        completed: false,
        editing: false,
      },
      {
        id: 6,
        title: "Help Luke Skywalker",
        description:
          "Sit veniam id enim qui incididunt adipisicing eiusmod voluptate ad labore ipsum consectetur. Officia sit eiusmod consequat commodo ex officia ad occaecat minim dolore exercitation nostrud sunt. Voluptate irure ad id veniam proident.",
        createdBy: "Emmanuel John",
        assignedTo: "Han Solo",
        completed: false,
        editing: false,
      },
      {
        id: 7,
        title: "Marry Han Solo",
        description:
          "Nisi ipsum dolore sit ipsum consectetur velit deserunt aute adipisicing aliquip. Incididunt duis cillum aliquip qui officia laborum. Aliqua eu nulla ipsum ex eu. Nostrud ex anim Lorem irure. Laborum ea magna reprehenderit elit anim mollit sunt pariatur laborum. Voluptate laboris reprehenderit sint officia esse ad dolor. Commodo sint eiusmod mollit sunt mollit esse laborum.",
        createdBy: "Arman Abkar",
        assignedTo: "Leia Skywalker",
        completed: true,
        editing: false,
      },
      {
        id: 8,
        title: "Defeat Dark Vader",
        description:
          "Minim nisi nulla ut nulla adipisicing dolor qui nostrud magna veniam commodo. Eu aute duis dolore cillum labore dolore cillum est. Eu cillum cillum tempor nisi sint mollit sint veniam duis esse consectetur do. Ex irure fugiat excepteur do. Ad cupidatat fugiat voluptate dolor dolor. Elit dolor et laborum sint ullamco et ad veniam irure do dolor nostrud do aliqua.",
        createdBy: "Emmanuel John",
        assignedTo: "Luke Skywalker",
        completed: false,
        editing: false,
      },
    ]);
  },

  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true);
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, { showModal: true, taskId: 1 });
  },
};
