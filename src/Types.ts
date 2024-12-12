//型定義
export interface InitialState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}
