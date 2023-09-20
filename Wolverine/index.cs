public static string decode(List<string> codes, string encoded)
    {
        Dictionary<string, string> map = new Dictionary<string, string>();

        foreach (string code in codes)
        {
            StringBuilder sub = new StringBuilder();
            StringBuilder result = new StringBuilder();

            for (int j = 0; j < code.Length; j++)
            {
                char character = code[j];

                if (character != ' ')
                {
                    sub.Append(character);
                }
                else
                {
                    for (int k = j + 1; k < code.Length; k++)
                    {
                        result.Append(code[k]);
                    }
                    map[sub.ToString()] = result.ToString();
                    break;
                }
            }
        }

        StringBuilder finalStr = new StringBuilder();
        StringBuilder subString = new StringBuilder();

        for (int i = 0; i < encoded.Length; i++)
        {
            char character = encoded[i];
            subString.Append(character);

            foreach (KeyValuePair<string, string> entry in map)
            {
                string key = entry.Key;
                string value = entry.Value;

                if (subString.ToString() == value && subString.ToString() != "111111")
                {
                    finalStr.Append(key);
                    subString.Clear();
                }
                else if (subString.ToString() == "111111")
                {
                    finalStr.Append('\n');
                    subString.Clear();
                }
            }
        }

        return finalStr.ToString();
    }

console.log(decode(["a 100100", "b 100101", "[newline] 111111", "c 110001", "d 100000", "p 111110", "q 000001"], "111110000001100100111111100101110001111110"))