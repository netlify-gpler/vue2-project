<template>
    <div>
        <div>
            Mouse: ({{ mouseState.x }}, {{ mouseState.y }})
            CapsLock: {{ capsLockState }}
            Space: {{ SpaceState }}
        </div>
    </div>
</template>

<script>
import { useMouse, useKeyModifier, useMagicKeys } from '@vueuse/core'

export default {
    components: {
    },
    computed: {
        _useMouse() {
            const { x, y } = useMouse()

            return { x, y }
        },
        _useKeyModifier() {
            const capsLockState = useKeyModifier('CapsLock')

            return {
                capsLockState
            }
        },
        _useMagicKeys() {
            const { Space: SpaceState } = useMagicKeys()

            return {
                SpaceState
            }
        },
        mouseState() {
            const { x, y } = this._useMouse
            return {
                x: x.value,
                y: y.value
            }
        },
        capsLockState() {
            const { capsLockState } = this._useKeyModifier

            return capsLockState.value
        },
        SpaceState() {
            const { SpaceState } = this._useMagicKeys

            return SpaceState.value
        }
    },
    mounted() {
    },
    methods: {

    }
}
</script>