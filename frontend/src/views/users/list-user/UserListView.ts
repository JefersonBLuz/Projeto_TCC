import Services from '@/services/Services';
export default {
    name: 'UserListView',
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.listAllUsers()
    },
    methods: {
        async listAllUsers() {
            try {
                const response = await Services.Users.getUsresAddressAll()
                console.log(response);

                this.users = response;
            } catch (error) {
                console.error('Error ao listar usuários: ', error);
            }
        },
        async removerUser(id: number) {
            try {
                await Services.Users.deleteUser(id)
                console.log('delete');
                this.listAllUsers()
            } catch (error) {
                console.error('Error ao remover usuário: ', error);
            }
        },
        async blockUser(user: any) {
            try {
                const response = await Services.Users.getUsresAddressId(user);
                const userForm = {...response[0].users}
                console.log(userForm);
                console.log(userForm.active);
                if(userForm.active){
                    userForm.active = false
                }else{
                    userForm.active = true
                }
                console.log(userForm.active);
                console.log(userForm);
                await Services.Users.updateUser(userForm)
                this.listAllUsers()
            } catch (error) {

            }
        }
    }
}