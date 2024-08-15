import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService ) {}

    @Get(":id")
    getLoanStatus(@Param("id") id :string ) {
        return "Loan created";
    }

    @Post()
    createLoan(@Body() createLoan: any) {
        return `Loan created for ${createLoan.userId}`;
    }





}
