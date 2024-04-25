import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors, sizes } from '@src/constants'
import RNPickerSelect from 'react-native-picker-select';
import { SelectCustomProps } from '@src/types';
import { Calendar } from 'lucide-react-native';

const SelectCustom = ({ onChange, value }: SelectCustomProps) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
      value={value}
      onValueChange={onChange}
      style={{
        inputAndroid: styles.select,
        inputIOS: styles.select,
        inputWeb: styles.select
      }}
      textInputProps={{
        placeholderTextColor: colors.gray
      }}
      placeholder={{
        label: 'Select an hour',
        value: null,
      }}
    items={[
        { label: '08:00', value: 1 },
        { label: '09:00', value: 2 },
        { label: '10:00', value: 3 },
        { label: '11:00', value: 4 },
        { label: '12:00', value: 5 },
        { label: '13:00', value: 6 },
        { label: '14:00', value: 7 },
    ]}  
    />
    <Calendar size={20} color={colors.gray} />
    </View>
  )
}

export default SelectCustom

const styles = StyleSheet.create({
    container: {
        width: sizes.width * 0.9,
        alignSelf: 'center',
        marginBottom: sizes.spacing,
        height: 50,
        borderRadius: 5,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: sizes.spacing,
        flexDirection: 'row',
    },
    select:{
        width: "100%",
        height: "100%",
        color: colors.white,
    }
})