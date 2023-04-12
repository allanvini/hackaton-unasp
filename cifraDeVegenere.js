const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(str, key) {
  // caso alguns dos parametros não seja satisfeito o sistema retornará um erro
  if (!str) throw new error("str is a required parameter");
  if (!key) throw new error("key is a required parameter");

  let encrypted = ""; // String criptografada

  // Loop para percorrer cada caractere do texto base
  str.split("").forEach((char, index) => {
    if (char != " ") {
      /**
       * calcula o índice da chave com base no index atual do texto base,
       * aponta a letra correspondente na o alfabeto com base no indice calculado,
       * e busca o índice da letra da chave no alfabeto
       */
      const rowIndex = alphabet.indexOf(key[index % key.length]);

      // busca o índice da letra atual no alfabeto
      const colIndex = alphabet.indexOf(char.toLowerCase());

      // Caso a letra exista no alfabeto, ela é adicionada a string criptografada utilizando a formula abaixo
      if (colIndex != -1) encrypted += alphabet[(rowIndex + colIndex) % 26];
    } else encrypted += " ";
  });
  return encrypted;
}

function decrypt(str, key) {
  if (!str) throw new error("str is a required parameter");
  if (!key) throw new error("key is a required parameter");
  let decrypted = ""; // String descriptografada
  str.split("").forEach((char, index) => {
    if (char != " ") {
      /**
       * calcula o índice da chave com base no index atual do texto base,
       * aponta a letra correspondente na o alfabeto com base no indice calculado,
       * e busca o índice da letra da chave no alfabeto
       */
      const rowIndex = alphabet.indexOf(key[index % key.length]);

      // busca o índice da letra atual no alfabeto
      const colIndex = alphabet.indexOf(char.toLowerCase());
      if (colIndex != -1)
      // Caso a letra exista no alfabeto, ela é adicionada a string descriptografada, utilizando uma lógica reversa da utilizada na criptografia
        decrypted += alphabet[(colIndex - rowIndex + 26) % 26];
    } else decrypted += " ";
  });
  return decrypted;
}

const original = "unasp e lixo"
const key = "brotaXota"

const encrypted = encrypt(original, key)
const decrypted = decrypt(encrypted, key)

console.table({
    original,
    encrypted,
    decrypted
})