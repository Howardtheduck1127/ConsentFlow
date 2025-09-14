const data = [
    { label: 'Teacher', value: '1' },
    { label: 'Parent', value: '2' },
];
const [value, setValue] = useState(null);
<Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder="Role"
    searchPlaceholder="Search..."
    value={value}
    onChange={item => {
        setValue(item.value);
    }}
    renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
    )}
/>
const styles = StyleSheet.create({
    dropdown: {
        //margin: 16,
        //marginLeft: 0,
        //marginBottom: 25,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginTop: 10,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#ccc'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#fff'
    },
    iconStyle: {
        width: 20,
        height: 20,
        color: '#fff'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff'
    },
});


//<TouchableOpacity
//onPress={() => { }}
//style={{
//borderColor: '#fff',
//borderWidth: 2,
//borderRadius: 10,
//paddingHorizontal: 20,
//paddingVertical: 5,
//flexDirection: 'row',
//justifyContent: 'center'
//}}>
///<Image style={{ height: 30, width: 25, alignSelf: 'flex-start' }} source={require('../Images/google-1.png')} />
//<Text style={{ color: '#fff', paddingTop: 7, textAlign: 'center' }}>     Continue with Google</Text>
//</TouchableOpacity>
//<Text style={{ textAlign: 'center', color: '#ccc', marginBottom: 0, marginTop: 20 }}>
//Or register with email...
//</Text>

//<Text style={{ textAlign: 'center', color: '#ccc', marginBottom: 30, }}>
//Or login with ...
//</Text>
//<TouchableOpacity
//onPress={() => { }}
//style={{
//borderColor: '#fff',
//borderWidth: 2,
//borderRadius: 10,
//paddingHorizontal: 20,
//paddingVertical: 5,
//flexDirection: 'row',
//justifyContent: 'center'
//}}>
//<Image style={{ height: 30, width: 25, alignSelf: 'flex-start' }} source={require('../Images/google-1.png')} />
//<Text style={{ color: '#fff', paddingTop: 7, textAlign: 'center' }}>     Continue with Google</Text>
//</TouchableOpacity>

//<InputField
//label={'Email Address'}
//icon={
//<MaterialIcons
//name='alternate-email'
//size={20}
//color='#fff'
//style={{ marginRight: 5 }}
//        />
//                    }
//                  keyboardType='email-address'
//            />
//
//              <InputField
//                label={'Password'}
//              icon={
//                <Ionicons
//                  name='lock-closed-outline'
//                size={20}
//              color='#fff'
//            style={{ marginRight: 5 }}
//      />
//}
//                   inputType='password'
//                 fieldButtonLabel={'Forgot?'}
//               fieldButtonFunction={() => { }}
//         />

//<View
//style={{
//flexDirection: 'row',
//borderBottomColor: '#ccc',
//borderBottomWidth: 1,
//paddingBottom: 8,
//marginTop: 25,
//}}>
//<Ionicons
//name='people-outline'
//size={20}
//color='#fff'
//style={{ marginRight: 5 }}
//>
//<TextInput
//placeholder='Role'
//placeholderTextColor='#ccc'
//style={{ flex: 1, paddingVertical: 0 }}
//color='#fff'
//onChange={e => handleRole(e)}
///>
//{role.length < 1 ? null : roleVerify ? (
//<MaterialIcons name='check-circle' color='#00ff00' size={20} />
//) : (
//<MaterialIcons name='error' color='#ff0000' size={20} />
//)}
//</View>
//{role.length < 1 ? null : roleVerify ? null : (
//<Text
//style={{
//marginLeft: 20,
//marginTop: 2,
//color: '#ff0000',
//}}>
//'Teacher' or 'Parent'
//</Text>
//)}