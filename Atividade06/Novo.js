export default function Login({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Salvar" />
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="Telefone" style={styles.input} />
        </View>
    );
}

const [contato, setContato] = useState({ key: Math.random().toString(), nome: "".onChangeText(), telefone: "".onChangeText() });

const salvarContato = () => {
    navigation.navigate('Lista', contatos);
}


const sytles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#c1c4cd',
        paddingTop: 16
    }
});