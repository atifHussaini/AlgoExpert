def areAlmostEquivalent(s, t):
    final_arr = []

    for i in range(len(s)):
        s_current_array = list(s[i])
        t_current_array = list(t[i])
        s_length = len(s_current_array)
        t_length = len(t_current_array)
        s_map = {}
        t_map = {}

        if s_length != t_length:
            final_arr.append('NO')
            break

        for j in range(s_length):
            s_element = s_current_array[j]
            t_element = t_current_array[j]

            s_map[s_element] = s_map.get(s_element, 0) + 1
            t_map[t_element] = t_map.get(t_element, 0) + 1

        for element, value in s_map.items():
            t_value = t_map.get(element, 0)
            difference = abs(value - t_value)

            if difference <= 3:
                continue
            else:
                final_arr.append('NO')
                break
        else:
            final_arr.append('YES')

        s_map.clear()
        t_map.clear()

    return final_arr