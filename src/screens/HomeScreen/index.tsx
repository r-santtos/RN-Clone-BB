import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FontAwesome5 name="barcode" size={24} color="#fff" />

        <View style={styles.logo}>
          <FontAwesome5 name="canadian-maple-leaf" size={24} color="#005aa5" />
        </View>

        <FontAwesome5 name="windows" size={24} color="#fff" />
      </View>

      <View style={styles.bottom}>
        <View style={styles.body}>
          <View style={styles.user}>
            <FontAwesome5 name="user-alt" size={50} color="#005aa5" />
          </View>

          <View style={styles.info}>
            <Text style={[styles.text, styles.title]}>Ricardo</Text>
            <Text style={styles.text}>0004-8 * 60321-4</Text>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.text, styles.btnTxt]}>entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text}>Outra conta</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnFooter}>
            <FontAwesome5 name="bell" size={24} color="#ffed00" />
            <Text style={styles.text}>Notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFooter}>
            <FontAwesome5 name="key" size={24} color="#ffed00" />
            <Text style={styles.text}>Senhas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFooter}>
            <FontAwesome5 name="gift" size={24} color="#ffed00" />
            <Text style={styles.text}>Vantagens</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFooter}>
            <FontAwesome5 name="qrcode" size={24} color="#ffed00" />
            <Text style={styles.text}>Leitor de{'\n'}QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a61a9',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  top: {
    flex: 1/2,
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor: '#ffed00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    width: '100%',
    backgroundColor: '#005aa5'
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  user: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: '#ffed00',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: -50,
  },
  info: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  btn: {
    backgroundColor: '#ffed00',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
    marginBottom: 20,
  },
  btnTxt: {
    color: '#005aa5',
    textTransform: 'uppercase',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnFooter: {
    width: '25%',
    height: 100,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0a61a9',
    borderWidth: 1,
    borderColor: '#005aa5',
  }
});
