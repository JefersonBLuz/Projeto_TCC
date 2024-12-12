import UserService from '@/services/UsersService';
export default {
    name: 'UserListView',
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.listAllUsers()
    },
    methods: {
        async listAllUsers() {
            try {
                const response = await UserService.getUsresAddressAll()
                console.log(response);
                
                this.users = response;
            } catch (error) {
                console.error('Error ao listar usuários: ', error);
            }
        },
        async removerUser(id: number){
            try {
                await UserService.deleteUser(id)
                console.log('delete');
                this.listAllUsers()
            } catch (error) {
                console.error('Error ao remover usuário: ', error);
            }
        }
    }
}