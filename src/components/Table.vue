<template>
    <div class="table-wrapper">
    <table class="table">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
            </tr>
            <tr>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
            </tr>
            <tr>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
            </tr>
            <tr>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
            </tr>
            <tr>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
            </tr>
            <tr>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
            </tr>
            <tr>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
            </tr>
            <tr>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
            </tr>
            <tr>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
            </tr>
            <tr>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<style scope lang="scss">
@import 'src/assets/styles/index';

.table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: $white;
}

.table td,
.table th {
    text-align: center;
    padding: 8px;
}

.table td {
    font-size: 12px;
}

.table thead th {
    color: $white;
    background: $primary-color;
}


.table thead th:nth-child(odd) {
    color: $white;
    background: $primay-color-darken;
}

.table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .table {
        display: block;
        width: 100%;
    }

    .table-wrapper:before {
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: $white;
        padding: 0 0 10px;
    }

    .table thead,
    .table tbody,
    .table thead th {
        display: block;
    }

    .table thead th:last-child {
        border-bottom: none;
    }

    .table thead {
        float: left;
    }

    .table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }

    .table td,
    .table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }

    .table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }

    .table tbody tr {
        display: table-cell;
    }

    .table tbody tr:nth-child(odd) {
        background: none;
    }

    .table tr:nth-child(even) {
        background: transparent;
    }

    .table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }

    .table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }

    .table tbody td {
        display: block;
        text-align: center;
    }
}
</style>