<template>
	<button
		:type="nativeType"
		class="z-button"
		@click="handleClick"
		:disabled="disabled || loading"
		:autofocus="autofocus"
		:class="[
			type ? 'z-button--' + type : '',
			size ? 'z-button--' + size : '',
			{
				'is-disabled': disabled,
				'is-loading': loading,
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle,
			},
		]"
	>
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
	</button>
</template>

<script lang="ts">
import {
    defineComponent
} from '@vue/composition-api';

export default defineComponent({
    name: 'ZButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'small'
        },
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean
    },
    setup(props, context) {
        const handleClick = (evt: any) => {
            context.emit('click', evt);
        };
        return {
            handleClick
        };
    }
});
</script>

<style lang="less" scoped>
.z-button {
    width: 3.75rem;
    height: .4rem;
    border: .01rem solid #dcdfe6;
    border-radius: .05rem;
}
</style>
