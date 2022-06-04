import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {

  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anythings </Text>

  const renderItem = ({ item }) => <Text style={styles.item} > - {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've been focused on</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

export default FocusHistory
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold'
  }
})
