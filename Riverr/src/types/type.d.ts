declare type ApiResponse<K> = {
  statusCode: number;
  message: string;
  content: K;
  dateTime: string;
};
