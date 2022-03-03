const token = artifacts.require('./BloodToken.sol')

function parseArgv() {
  let args = process.argv.slice(2)
  let params = args.filter((arg) => arg.startsWith('--'))
  let result = {}
  params.map((p) => {
    let [key, value] = p.split('=')
    result[key.slice(2)] = value === undefined ? true : value
  })
  return result
}

module.exports = function (deployer) {
  deployer.then(async () => {
    let params = parseArgv()
    await deployer.deploy(
      token,
      params['name'],
      params['symbol'],
      params['decimals']
    )
  })
}
