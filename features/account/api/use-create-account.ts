import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from 'hono'


type ResponseType = InferResponseType<typeof client>

export const useCreateAccount = () => {

    const queryClient = useQueryClient();

    const mutaton = useMutation<>({})
}