export default function Lista({ route, navigation }) {

    const exibirItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.telefone}>{item.telefone}</Text>
            </View>
        );
    }

    const novoContato = () => {
        navigation.navigate('Novo');        
     }

    return (
        <View style={styles.container}>
            <Button title="Novo contato" onPress={novoContato}/>
            <FlatList style={styles.container} data={contatos} renderItem={exibirItem}/>

        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        boderBottomWidth: 1,
        borderColor: '#c1c4cd',
    },
    nome: {
        flex: 1,
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '500',
    },
    titulo: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '500',
    },
});

const [contatos, setContatos] = useState([]);