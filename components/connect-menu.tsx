import { ConnectButton as Connect } from '@rainbow-me/rainbowkit'

type Props = {}

export const ConnectMenu = ({}: Props) => {
  return (
    <>
      <Connect.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <a
              className="tw-block tw-w-full tw-cursor-pointer tw-bg-gray-50 tw-px-5 tw-py-3 tw-text-center tw-font-medium tw-text-neutral-600 hover:tw-bg-gray-100"
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return <span onClick={openConnectModal}>Log in</span>
                }

                if (chain.unsupported) {
                  return <span onClick={openChainModal}>Wrong network</span>
                }

                return (
                  <>
                    {/*<span onClick={openChainModal}>
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{width: 12, height: 12}}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </span>*/}

                    <span onClick={openAccountModal}>
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </span>
                  </>
                )
              })()}
            </a>
          )
        }}
      </Connect.Custom>
    </>
  )
}
