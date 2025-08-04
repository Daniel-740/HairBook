import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';
import { LogInProps } from './logIn.interface';

export const LogIn = (props: LogInProps) => {
  const {
    email,
    password,
    showPassword,
    setEmail,
    setPassword,
    handleLogin,
    setShowPassword,
  } = props;

  return (
    <View className="flex gap-y-8">
      <View>
        <Text className="text-primary text-sm mb-1">Email</Text>
        <View className="flex-row items-center border-b border-gray-300 pb-2">
          <TextInput
            className="flex-1 text-gray-700"
            placeholder="tuemail"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text className="text-primary">@</Text>
        </View>
      </View>

      <View>
        <Text className="text-primary text-sm mb-1">Contraseña</Text>
        <View className="flex-row items-center border-b border-gray-300 pb-2">
          <TextInput
            className="flex-1 text-gray-700"
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeSlashIcon size={20} color="#FA9E31" />
            ) : (
              <EyeIcon size={20} color="#FA9E31" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        className="bg-primary py-3 rounded-lg shadow-md"
        onPress={() => handleLogin()}
      >
        <Text className="text-white font-semibold text-center">Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
