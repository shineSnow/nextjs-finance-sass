import { client } from "@/lib/hono"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";



type ResponseType = InferResponseType<typeof client.api.accounts[":id"]["$delete"]>


export const useDeleteAccount = (id?: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error>({
        mutationFn: async () => {
            if (!id) {
                throw new Error("Account ID is required");
            }
            const response = await client.api.accounts[":id"]["$delete"]({ param: { id } });
            return response.json();
        },
        onSuccess: () => {
            toast.success("Account deleted")
            queryClient.invalidateQueries({ queryKey: ['accounts', { id }] })
            queryClient.invalidateQueries({ queryKey: ['accounts'] })
            //TODO: Invalidate sumary and transactions
        },
        onError: () => {
            toast.error("Failed to delete account")
        }
    })

    return mutation;
}