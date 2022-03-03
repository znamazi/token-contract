const BloodToken = artifacts.require('./BloodToken.sol')
const DeusToken = artifacts.require('./DeusToken.sol')
const DeiToken = artifacts.require('./DeiToken.sol')

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
    switch (contract) {
      case 'blood':
        await deployer.deploy(
          BloodToken,
          params['name'],
          params['symbol'],
          params['decimals']
        )
        break
      case 'deus':
        await deployer.deploy(
          DeusToken,
          params['name'],
          params['symbol'],
          params['decimals']
        )
        break
      case 'dei':
        await deployer.deploy(
          DeiToken,
          params['name'],
          params['symbol'],
          params['decimals']
        )
        break

      default:
        break
    }
  })
}
