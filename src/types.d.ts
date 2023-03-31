type InferObjectFromArray<T> = T extends (infer U)[] ? U : never;
